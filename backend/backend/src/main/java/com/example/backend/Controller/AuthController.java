package com.example.backend.Controller;

import com.example.backend.DTO.AuthResponse;
import com.example.backend.DTO.LoginRequest;
import com.example.backend.DTO.RegisterRequest;
import com.example.backend.Model.Users;
import com.example.backend.Repository.UserRepository;
import com.example.backend.Service.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager,
                          JwtService jwtService,
                          UserRepository userRepository,
                          BCryptPasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request){
        System.out.println("hit to /register");
        Users newUser = new Users(
                request.getUsername(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword())
        );

        userRepository.save(newUser);

        return new ResponseEntity<>(
                new AuthResponse("User registered successfully"),
                HttpStatus.OK
        );
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        if(authentication.isAuthenticated()){
            String token = jwtService.generateToken(request.getUsername());
            return new ResponseEntity<>(new AuthResponse(token), HttpStatus.OK);
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
