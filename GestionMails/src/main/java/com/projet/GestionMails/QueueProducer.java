package com.projet.GestionMails;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.projet.GestionMails.mails.Mail;

@Component("qp")
public class QueueProducer {
 protected Logger logger = LoggerFactory.getLogger(getClass());
 private String fanoutExchange = "messagequeue-exchange";
 private final RabbitTemplate rabbitTemplate;
 
 @Autowired
 public QueueProducer(RabbitTemplate rabbitTemplate) {
  super();
  this.rabbitTemplate = rabbitTemplate;
 }
 public void produce(Mail mail) throws Exception {
  logger.info("Storing mail...");
  rabbitTemplate.setExchange(fanoutExchange);
  rabbitTemplate.convertAndSend(new ObjectMapper().writeValueAsString(mail));
  logger.info("Mail stored in queue sucessfully");
 }
}