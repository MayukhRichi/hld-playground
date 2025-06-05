package com.hld.playground.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Document(collection = "system_models")
public class SystemModel {
    @Id
    private String id;

    private String name;
    private String status;
    private String createdBy;
    private LocalDateTime lastUpdated;

    private List<ModelNode> processElements;
}
