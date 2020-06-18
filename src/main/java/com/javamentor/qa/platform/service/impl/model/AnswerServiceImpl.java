package com.javamentor.qa.platform.service.impl.model;

import com.javamentor.qa.platform.dao.abstracts.model.AnswerDAO;
import com.javamentor.qa.platform.models.entity.question.answer.Answer;
import com.javamentor.qa.platform.service.abstracts.model.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerServiceImpl extends ReadWriteServiceImpl<Answer, Long> implements AnswerService {

    private final AnswerDAO answerDAO;

    @Autowired
    public AnswerServiceImpl(AnswerDAO answerDAO) {
        super(answerDAO);
        this.answerDAO = answerDAO;
    }


    @Override
    public void resetIsHelpful(Long questionId) {
        Answer answer = answerDAO.getHelpfulAnswerByQuestionId(questionId);
        if (answer != null) {
            answer.setIsHelpful(false);
            answer.setDateAcceptTime(null);
            answerDAO.update(answer);
        }
    }
}
