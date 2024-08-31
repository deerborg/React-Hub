package dev.deerops.todoapp.controller;

import dev.deerops.todoapp.model.dto.request.CreateToDoRequest;
import dev.deerops.todoapp.model.dto.response.ToDoResponse;
import dev.deerops.todoapp.service.TodoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todos")
public class ToDoController {
    private final TodoService todoService;


    @PostMapping
    @CrossOrigin
    public ResponseEntity<ToDoResponse> createToDo(@Valid @RequestBody CreateToDoRequest createToDoRequest) {
        return todoService.createToDo(createToDoRequest);
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<ToDoResponse>> getAllToDos() {
        return todoService.getAllTodo();
    }

    @DeleteMapping("/{toDoId}")
    @CrossOrigin
    public ResponseEntity<?> deleteToDoById(@PathVariable String toDoId) {
        return todoService.deleteToDoById(toDoId);
    }

}
