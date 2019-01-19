package com.cts.gbossApp.wmprojectmanagementsystem.dao;

import com.cts.gbossApp.wmprojectmanagementsystem.model.OpenRequirements;

import java.util.Collection;

public interface OpenRequirementsDAOInt {
    Integer createNewRequirementData(OpenRequirements newRequirement);

    Collection<OpenRequirements> getAllOpenRequirements();

    void deleteOpenRequirementData(Integer soLineItemID);
}
