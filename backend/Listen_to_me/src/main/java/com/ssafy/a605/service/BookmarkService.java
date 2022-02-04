package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.BookmarkDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BookmarkService {
    public List<BookmarkDto> getLikedCounselor(String userEmail, Pageable pageRequest) throws Exception;
    // public Page<BookmarkDto> getRecommendCounselor(String userEmail, )
}
