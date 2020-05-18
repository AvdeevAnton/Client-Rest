package com.javamentor.qa.platform.webapp.converter;

import com.javamentor.qa.platform.models.dto.UserDto;
import com.javamentor.qa.platform.models.entity.user.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.rowset.serial.SerialBlob;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;

@Mapper(componentModel = "spring")
public abstract class UserConverter {

    @Autowired
    protected PasswordEncoder passwordEncoder;

    @Mappings({
            @Mapping (target = "role.name", source = "role"),
            @Mapping (target = "imageUser", source = "imageUser", qualifiedByName = "toBlob"),
            @Mapping(target = "password", expression = "java(passwordEncoder.encode(userDto.getPassword()))")}
            )
    public abstract User toEntity(UserDto userDto);

    @Mappings({
            @Mapping (target = "role", source = "role.name"),
            @Mapping(target = "imageUser", source = "imageUser", qualifiedByName = "toArray"),
            @Mapping(target = "password", ignore = true)}
    )
    public abstract UserDto toDto(User user);

    public abstract List<User> toEntityList(List<UserDto> entityList);

    public abstract List<UserDto> toDtoList(List<User> dtoList);

    @Named("toBlob")
    protected Blob blob (byte[] imageUser) throws SQLException {
        return new SerialBlob(imageUser);
    }

    @Named("toArray")
    protected byte[] array (Blob imageUser) throws SQLException {
        return imageUser.getBytes(1, (int) imageUser.length());
    }
}