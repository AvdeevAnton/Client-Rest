package com.javamentor.qa.platform.models.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
public class QuestionDto {

    private Long id;

    @NotNull
    private String title;

    @NotNull
    private UserDto userDto;

//    @NotNull
//    private Long userId;

//    @NotNull
//    private String username;

//    @NotNull
//    private Integer reputationCount;

    @NotNull
    private String description;

    @NotNull
    private List<TagDto> tags = new ArrayList<>();

    @NotNull
    private Integer viewCount;

    @NotNull
    private Integer countAnswer;

    @NotNull
    private Integer countValuable;

    @NotNull
    private LocalDateTime persistDateTime;

    private Boolean isHelpful;
}