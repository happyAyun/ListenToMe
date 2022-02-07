package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.ReviewDto;
import com.ssafy.a605.model.entity.Review;

import java.util.List;

public interface ReviewService {
    boolean updateReview(ReviewDto reviewDto);

    boolean deleteReview(int reviewId);

    List<Review> getListReview(String counselor);

    Review getReview(int reviewId);
}
