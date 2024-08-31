package dev.deerops.todoapp.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "todos")
@Getter
@Setter
public class ToDoEntity {
    @Id
    @GeneratedValue
    @UuidGenerator
    private String id;

    @Column(length = 50)
    private String title;

    @Column(length = 128)
    private String description;

    @Temporal(TemporalType.DATE)
    private LocalDate date;
}
