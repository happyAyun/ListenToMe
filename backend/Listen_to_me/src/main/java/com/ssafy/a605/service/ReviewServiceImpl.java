package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.ReviewDto;
import com.ssafy.a605.model.entity.Review;

import java.util.List;

public class ReviewServiceImpl implements ReviewService{
    @Override
    public boolean updateReview(ReviewDto reviewDto) {
        return false;
    }

    @Override
    public boolean deleteReview(int reviewId) {
        return false;
    }

    @Override
    public List<Review> getListReview(String counselor) {
        return null;
    }

    @Override
    public Review getReview(int reviewId) {
        return null;
    }
}
