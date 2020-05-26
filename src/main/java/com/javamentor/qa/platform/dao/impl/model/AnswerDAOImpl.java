package com.javamentor.qa.platform.dao.impl.model;

import com.javamentor.qa.platform.dao.abstracts.model.AnswerDAO;
import com.javamentor.qa.platform.models.entity.Comment;
import com.javamentor.qa.platform.models.entity.question.answer.Answer;
import org.springframework.stereotype.Repository;

import javax.persistence.NoResultException;

@Repository
public class AnswerDAOImpl extends ReadWriteDAOImpl<Answer, Long> implements AnswerDAO {

    @Override
    @Transactional
    public Answer getHelpfulAnswerByQuestionId(Long questionId) {
        try {
            return entityManager.createQuery(
                    "select a from Answer a where a.question.id = :questionId and a.isHelpful = true", Answer.class)
                    .setParameter("questionId", questionId)
                    .getSingleResult();
        }catch (NoResultException e){
            return null;
        }
    }


}
