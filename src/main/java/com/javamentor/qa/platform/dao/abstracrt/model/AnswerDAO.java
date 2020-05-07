package com.javamentor.qa.platform.dao.abstracrt.model;

import java.util.List;

public interface AnswerDAO<T, PK> extends AbstractDAO<T, PK> {
    List<T> getAnswersByQuestionID(PK questionId);
}
