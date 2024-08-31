package dev.deerops.todoapp.service.impl;

import dev.deerops.todoapp.model.dto.request.CreateToDoRequest;
import dev.deerops.todoapp.model.dto.response.ToDoResponse;
import dev.deerops.todoapp.model.entity.ToDoEntity;
import dev.deerops.todoapp.model.mapper.ToDoMapper;
import dev.deerops.todoapp.repository.ToDoRepository;
import dev.deerops.todoapp.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ToDoServiceImpl implements TodoService {
    private final ToDoRepository todoRepository;

    private final ToDoMapper todoMapper;

    @Override
    public ResponseEntity<ToDoResponse> createToDo(CreateToDoRequest createToDoRequest) {
        ToDoEntity entity = todoMapper.toCreateToDoRequest(createToDoRequest);
        entity.setDate(LocalDate.now());
        ToDoResponse response = todoMapper.fromCreateToDoResponse(todoRepository.save(entity));
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<List<ToDoResponse>> getAllTodo() {
        List<ToDoResponse> responseList = todoRepository.findAll().stream()
                .map(todoMapper::fromCreateToDoResponse).toList();
        return ResponseEntity.ok(responseList);
    }

    @Override
    public ResponseEntity<?> deleteToDoById(String toDoId) {
        ToDoEntity toDoEntity = todoRepository.findById(toDoId).orElseThrow(()-> new RuntimeException("ToDo not found"));
        todoRepository.delete(toDoEntity);
        return ResponseEntity.ok("ToDo deleted successfully");
    }
}
