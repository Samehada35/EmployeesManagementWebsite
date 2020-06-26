package com.projet.GestionMails;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableConfigurationProperties
@EnableDiscoveryClient
public class GestionMailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionMailsApplication.class, args);
	}

}
