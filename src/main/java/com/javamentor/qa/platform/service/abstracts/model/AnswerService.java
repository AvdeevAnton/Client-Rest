package com.javamentor.qa.platform.service.abstracts.model;

import com.javamentor.qa.platform.models.entity.question.answer.Answer;

public interface AnswerService extends ReadWriteService<Answer, Long>{
    void resetIsHelpful(Long questionId);
    Answer updateAnswerCount(Long answerId, Boolean count);
    Answer updateAnswerHelpful(Long answerId, Boolean isHelpful);
    Answer updateAnswerBody(Long answerId, String htmlBody);
}
