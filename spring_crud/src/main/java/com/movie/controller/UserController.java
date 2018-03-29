package com.movie.controller;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import userModel.userinfo;

import com.movie.model.Movie;
import com.movie.repository.FavouriteMovieRepository;
import com.movie.repository.userrepository;
@RestController
@RequestMapping ("/userinformation")
public class UserController {
	 private userrepository userrepo;
	 
	 public UserController(userrepository userrepo) {
			this.userrepo = userrepo;
		}
	 @GetMapping("/information")
		public List<userinfo> getAll() {
			return userrepo.findAll();
		}
		@RequestMapping(value = "/userdata", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
		public void adddetails(@RequestBody userinfo userdata) {
			userrepo.save(userdata);
		}

}
