package com.projet.GestionMails;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfiguration {
 private String fanoutExchange = "messagequeue-exchange";
 private String queueName = "messagequeue";
 
 @Bean
 Queue queue() {
  return new Queue(queueName, true);
 }
 @Bean
 FanoutExchange exchange() {
  return new FanoutExchange(fanoutExchange);
 }
 @Bean
 Binding binding(Queue queue, FanoutExchange exchange) {
  return BindingBuilder.bind(queue).to(exchange);
 }
}