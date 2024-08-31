package dev.deerops.todoapp.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CreateToDoRequest {
    @NotBlank
    private String title;
    @NotBlank
    private String description;
}
