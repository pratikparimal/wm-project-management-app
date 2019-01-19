package com.cts.gbossApp.wmprojectmanagementsystem.service;

import com.cts.gbossApp.wmprojectmanagementsystem.model.OpenRequirements;

import java.util.Collection;

public interface OpenRequirementsServiceInt {
    Integer createNewRequirementData(OpenRequirements openReqFormData);

    Collection<OpenRequirements> getAllOpenRequirements();

    void deleteOpenRequirementData(Integer soLineItemID);
}
