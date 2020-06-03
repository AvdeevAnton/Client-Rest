package com.javamentor.qa.platform.service.impl.dto;

import com.javamentor.qa.platform.dao.abstracts.dto.TagDtoDAO;
import com.javamentor.qa.platform.models.dto.TagDto;
import com.javamentor.qa.platform.service.abstracts.dto.TagDtoService;

import javafx.util.Pair;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagDtoServiceImpl implements TagDtoService {

    private final TagDtoDAO tagDtoDAO;

    public TagDtoServiceImpl(TagDtoDAO tagDtoDAO) {
        this.tagDtoDAO = tagDtoDAO;
    }

    @Override
    public Pair<Long, List<TagDto>> findAllTagsDtoPagination(int pageSize, int pageNumber) {
        List<TagDto> list = tagDtoDAO.findAllTagsDtoPaginationPopular(pageSize, pageNumber);
        Long finalPage = tagDtoDAO.getTotalEntitiesCount();
        return new Pair<>(finalPage, list);
    }

    @Override
    public Pair<Long, List<TagDto>> findAllTagsDtoPaginationName(int pageSize, int pageNumber) {
        List<TagDto> list = tagDtoDAO.findAllTagsDtoPaginationName(pageSize, pageNumber);
        Long finalPage = tagDtoDAO.getTotalEntitiesCount();
        return new Pair<>(finalPage, list);
    }

    @Override
    public Pair<Long, List<TagDto>> findAllTagsDtoPaginationDate(int pageSize, int pageNumber) {
        List<TagDto> list = tagDtoDAO.findAllTagsDtoPaginationDate(pageSize, pageNumber);
        Long finalPage = tagDtoDAO.getTotalEntitiesCount();
        return new Pair<>(finalPage, list);
    }

    @Override
    public Pair<Long, List<TagDto>> findAllTagsSearch(String word, int pageSize, int pageNumber) {
        word = word.trim();
        List<TagDto> list = word.isEmpty() ? tagDtoDAO.findAllTagsDtoPaginationPopular(pageSize, pageNumber) : tagDtoDAO.findAllTagsSearch(word, pageSize, pageNumber);
        Long finalPage = tagDtoDAO.getTotalEntitiesCount();
        return new Pair<>(finalPage, list);
    }
}
