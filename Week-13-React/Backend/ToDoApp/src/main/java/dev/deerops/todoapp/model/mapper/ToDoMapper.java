package dev.deerops.todoapp.model.mapper;

import dev.deerops.todoapp.model.dto.request.CreateToDoRequest;
import dev.deerops.todoapp.model.dto.response.ToDoResponse;
import dev.deerops.todoapp.model.entity.ToDoEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ToDoMapper {

    ToDoEntity toCreateToDoRequest(CreateToDoRequest createToDoRequest);

    ToDoResponse fromCreateToDoResponse(ToDoEntity toDoEntity);
}
