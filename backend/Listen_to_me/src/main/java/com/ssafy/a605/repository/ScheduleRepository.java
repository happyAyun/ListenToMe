package com.ssafy.a605.repository;

import com.ssafy.a605.model.dto.ScheduleDto;
import com.ssafy.a605.model.entity.Schedule;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    Page<ScheduleDto> findAllByCounselor_EmailAndStateIn(String userEmail, int[] states, Pageable pageRequest);
    boolean existsScheduleByDateTimeEquals(LocalDateTime dateTime);
}
