package com.projet.GestionMails.mails;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.projet.GestionMails.QueueProducer;


@CrossOrigin
@RestController
public class MailService  implements ApplicationContextAware{
	private ArrayList<Mail> mails;
	 ApplicationContext context;
	
	@Autowired
	private MailRepository mailRepository;
	
	public MailService() {
		mails = new ArrayList<>();
	}

	/* Réccupérer tous les mails */
	@RequestMapping(value="/mails/list", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK)
	public List<Mail> getAllMails(){
		mails.clear();
		Iterable<Mail> it = mailRepository.findAll();
		for(Mail m : it) {
			mails.add(m);
		}
		return mails;
	}
	
	/* Réccupérer toutes les absences d'un employé */
	@RequestMapping(value="/mails/list/{matricule}", method=RequestMethod.GET) 
	@ResponseStatus(HttpStatus.OK)
	public List<Mail> getEmployeMails(@PathVariable(value = "matricule") int matricule){
		ArrayList<Mail> empMails = new ArrayList<>();
		for(Mail m : mails) {
			if(m.getMatriculeEmp().equals(matricule)) {
				empMails.add(m);
			}
		}
		return empMails;
	}
	
	/* Ajouter un nouvel mail */
	@RequestMapping(value = "/mails/new", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void addMails(@RequestBody Mail m) throws Exception{
		System.out.println(m);
		mails.add(m);
		mailRepository.save(m);
		QueueProducer queueProducer = (QueueProducer) context.getBean("qp");
		queueProducer.produce(m);
	}
	
	/* Réccupérer un mail via son id */
	@RequestMapping(value = "/mails/show/{id}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public Mail getMail(@PathVariable(value = "id") int id){
		mails.clear();
		Iterable<Mail> it = mailRepository.findAll();
		for(Mail m : it) {
			mails.add(m);
		}
		Mail mail = mails.stream().filter(m -> m.getIdMail() == id).findFirst().orElse(null);
		return mail;
	}
	
	/* Supprimer un mail via son id */
	@RequestMapping(value = "/mails/list/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.OK)
	public void deleteEmploye(@PathVariable(value = "id") int id){
		mailRepository.deleteById(id);
	}

	@Override
	public void setApplicationContext(ApplicationContext context) throws BeansException {
		this.context = context;
		
	}
}
