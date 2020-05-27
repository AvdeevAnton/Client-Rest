package com.javamentor.qa.platform.service.impl.dto;

import com.javamentor.qa.platform.dao.abstracts.dto.UserDtoDAO;
import com.javamentor.qa.platform.models.dto.UserDto;
import com.javamentor.qa.platform.service.abstracts.dto.UserDtoService;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDtoServiceImpl implements UserDtoService {

    @Autowired
    private UserDtoDAO userDtoDao;

    @Override
    public List<UserDto> getUserDtoList() {
        return userDtoDao.getUserDtoList();
    }

    @Override
    public Optional<UserDto> getUserDtoById(Long id) {
        return userDtoDao.getUserDtoById(id);
    }

    @Override
    public Pair<List<UserDto>, Long> getListUsersToPagination(int page, int count) {
        List<UserDto> listUsersDto = userDtoDao.getListUsersToPagination(page, count);
        Long countUsers = userDtoDao.getCountUsers();
        return new Pair<>(listUsersDto, countUsers);
    }

    @Override
    public Pair<List<UserDto>, Long> getListUsersByNameToSearch(String name) {
        List<UserDto> listUsersDto = userDtoDao.getListUsersByNameToSearch(name);
        int countUsers = listUsersDto.size();
        return new Pair<>(listUsersDto, (long)countUsers);
    }
}
