package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.ReviewDto;
import com.ssafy.a605.model.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ReviewService {
    boolean writeReview(int scheduleId, ReviewDto reviewDto) throws Exception;

    boolean updateReview(ReviewDto reviewDto);

    boolean deleteReview(int reviewId);

    Page <Review> getListReview(String counselor, Pageable pageRequest)throws Exception;

    Review getReview(int reviewId);

    boolean checkClient(String clientEmail, int scheduleId);
}
