package com.javamentor.qa.platform.models.dto;

import com.javamentor.qa.platform.models.entity.CommentType;
import com.javamentor.qa.platform.models.util.action.OnCreate;
import com.javamentor.qa.platform.models.util.action.OnUpdate;
import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CommentDto {

    @Null(groups = OnCreate.class, message = "Должно принимать null значение при создании")
    @NotNull(groups = OnUpdate.class, message = "Не должно принимать null значние при обновлении")
    private Long id;
    @NotNull
    private String text;
    @NotNull
    private CommentType commentType;
    @NotNull
    private LocalDateTime persistDateTime;
    @NotNull
    private LocalDateTime lastUpdateDateTime;
    @NotNull
    private Long userId;
    @NotNull
    private String fullName;
}
