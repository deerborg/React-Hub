package dev.deerops.todoapp.repository;

import dev.deerops.todoapp.model.entity.ToDoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<ToDoEntity,String> {
}
