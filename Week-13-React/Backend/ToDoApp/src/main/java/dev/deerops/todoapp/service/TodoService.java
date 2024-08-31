package dev.deerops.todoapp.service;

import dev.deerops.todoapp.model.dto.request.CreateToDoRequest;
import dev.deerops.todoapp.model.dto.response.ToDoResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TodoService {
    ResponseEntity<ToDoResponse> createToDo(CreateToDoRequest createToDoRequest);
    ResponseEntity<List<ToDoResponse>> getAllTodo();
    ResponseEntity<?> deleteToDoById(String toDoId);
}
