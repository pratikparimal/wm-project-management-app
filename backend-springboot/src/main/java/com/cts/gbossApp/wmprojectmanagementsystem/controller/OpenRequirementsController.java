package com.cts.gbossApp.wmprojectmanagementsystem.controller;

import com.cts.gbossApp.wmprojectmanagementsystem.model.OpenRequirements;
import com.cts.gbossApp.wmprojectmanagementsystem.service.OpenRequirementsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.Collection;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/api")
public class OpenRequirementsController {

    @Autowired
    OpenRequirementsService openReqService;

    @GetMapping(path="/requirements", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllOpenRequirements() {
        Collection<OpenRequirements> allRequirements;
        allRequirements = openReqService.getAllOpenRequirements();
        return new ResponseEntity<>(allRequirements, HttpStatus.OK);
    }
    //Collection<OpenRequirements>

    @PostMapping(path = "/requirement", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createNewOpenRequirement(@Valid @RequestBody OpenRequirements openReqFormData){
        Integer rowsAffected;
        rowsAffected = openReqService.createNewRequirementData(openReqFormData);
        System.out.println("In Controller " + openReqFormData.toString());
        return new ResponseEntity<>(rowsAffected, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/deleteRequirement/{soLineItemID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteOpenRequirementData(@PathVariable("soLineItemID") Integer soLineItemID) {
        openReqService.deleteOpenRequirementData(soLineItemID);
        return new ResponseEntity<>("Product is deleted successfully", HttpStatus.OK);
    }
}
