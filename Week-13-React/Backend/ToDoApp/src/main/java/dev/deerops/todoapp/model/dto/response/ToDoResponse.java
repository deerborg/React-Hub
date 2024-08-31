package dev.deerops.todoapp.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ToDoResponse {
    private String id;
    private String title;
    private String description;
    private LocalDate date;
}
