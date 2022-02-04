package com.ssafy.a605.service;

import com.ssafy.a605.model.dto.BookmarkDto;
import com.ssafy.a605.repository.BookmarkRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkServiceImpl implements BookmarkService{

    // final private BookmarkRepository bookmarkRepository;
    @Override
    public List<BookmarkDto> getLikedCounselor(String userEmail, Pageable pageRequest) throws Exception {
//        List<BookmarkDto> counselor =
        return null;
    }
}
