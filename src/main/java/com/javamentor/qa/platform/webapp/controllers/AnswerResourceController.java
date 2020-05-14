package com.javamentor.qa.platform.webapp.controllers;

import com.javamentor.qa.platform.models.dto.AnswerDto;
import com.javamentor.qa.platform.models.entity.question.answer.Answer;
import com.javamentor.qa.platform.service.abstracts.dto.AnswerDtoService;
import com.javamentor.qa.platform.service.abstracts.model.AnswerService;
import com.javamentor.qa.platform.webapp.converter.AnswerConverter;

import com.javamentor.qa.platform.webapp.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user/question/{questionId}/answer")
public class AnswerResourceController {

    @Autowired
    private  AnswerConverter answerConverter;
    @Autowired
    private  AnswerService answerService;
    @Autowired
    private  AnswerDtoService answerDtoService;

    @Autowired
    private UserConverter userConverter;



    @GetMapping
    public ResponseEntity<List<AnswerDto>> getAnswersDto(@PathVariable Long questionId) {

        return ResponseEntity.ok(answerDtoService.getAnswersDtoByQuestionId(questionId));
    }

    @PostMapping
    public ResponseEntity<AnswerDto> addAnswer(@RequestBody AnswerDto answerDTO, @PathVariable Long questionId) {
        answerDTO.setQuestionId(questionId);
        answerService.persist(answerConverter.dtoToEntity(answerDTO));
        return ResponseEntity.ok(answerDTO);
    }

    @PutMapping("/{answerId}")
    public ResponseEntity<AnswerDto> updateAnswer(@RequestBody AnswerDto answerDTO, @PathVariable Long answerId) {
        Answer answer = answerConverter.dtoToEntity(answerDTO);
        answer.setId(answerId);
        answerService.update(answer);
        return ResponseEntity.ok(answerConverter.entityToDto(answer));
    }

    @DeleteMapping("/{answerId}")
    public ResponseEntity<AnswerDto> deleteAnswer(@PathVariable Long answerId) {
        answerService.deleteById(answerId);
        return ResponseEntity.ok().build();
    }
}
