package com.ssafy.a605.repository;

import com.ssafy.a605.model.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Review findById(int reviewId);
    List<Review> findReviewsByCounselor_Email(String userEmail);
}
