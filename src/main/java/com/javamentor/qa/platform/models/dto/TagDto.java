package com.javamentor.qa.platform.models.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TagDto {
    private Long id;
    private String name;
    private String description;
}