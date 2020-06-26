package com.projet.GestionPersonnel;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfiguration {
 private static final String LISTENER_METHOD = "receiveMessage";
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
 @Bean
 SimpleMessageListenerContainer container(ConnectionFactory connectionFactory,
  MessageListenerAdapter listenerAdapter) {
  SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
  container.setConnectionFactory(connectionFactory);
  container.setQueueNames(queueName);
  container.setMessageListener(listenerAdapter);
  return container;
 }
 @Bean
 MessageListenerAdapter listenerAdapter(QueueConsumer consumer) {
  return new MessageListenerAdapter(consumer, LISTENER_METHOD);
 }
}
