package com.hld.playground.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class ModelNode {
    private String id;
    private String type;
    private String label;
    private Position position;
    private Map<String, Object> data;
}
