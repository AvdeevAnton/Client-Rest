package com.javamentor.qa.platform.dao.impl.dto;

import com.javamentor.qa.platform.dao.abstracts.dto.QuestionDtoDao;
import com.javamentor.qa.platform.dao.impl.model.ReadWriteDAOImpl;
import com.javamentor.qa.platform.models.dto.QuestionDto;
import com.javamentor.qa.platform.models.dto.TagDto;
import org.hibernate.query.Query;
import org.hibernate.transform.ResultTransformer;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.*;

@Repository
public class QuestionDtoDaoImpl extends ReadWriteDAOImpl<QuestionDto, Long> implements QuestionDtoDao {

    @SuppressWarnings("unchecked")
    @Override
    public List<QuestionDto> getQuestionDtoList() {
        List<QuestionDto> questionDto = new ArrayList<>();
        try {
            questionDto = entityManager.createQuery("SELECT " +
                    "q.id, " +
                    "q.title, " +
                    "q.user.fullName, " +
                    "q.user.reputationCount, " +
                    "q.viewCount, " +
                    "q.countValuable, " +
                    "q.persistDateTime,  " +
                    "t.id, " +
                    "t.name, " +
                    "t.description, " +
                    "(SELECT COUNT (a) FROM Answer a WHERE a.question.id = q.id), " +
                    "(SELECT CASE WHEN MAX (a.isHelpful) > 0 THEN true ELSE false END FROM Answer a WHERE a.question.id = q.id) " +
                    "FROM Question q JOIN q.tags t")
                    .unwrap(Query.class)
                    .setResultTransformer(new ResultTransformer() {
                        @Override
                        public Object transformTuple(Object[] objects, String[] strings) {
                            TagDto tagDto = TagDto.builder()
                                    .id((Long) objects[7])
                                    .name((String) objects[8])
                                    .description((String) objects[9])
                                    .build();
                            List<TagDto> tagDtoList = new ArrayList<>();
                            tagDtoList.add(tagDto);
                            return QuestionDto.builder()
                                    .id((Long) objects[0])
                                    .title((String) objects[1])
                                    .username((String) objects[2])
                                    .reputationCount((Integer) objects[3])
                                    .viewCount((Integer) objects[4])
                                    .countValuable((Integer) objects[5])
                                    .persistDateTime((LocalDateTime) objects[6])
                                    .tags(tagDtoList)
                                    .countAnswer(((Number) objects[10]).intValue())
                                    .isHelpful((Boolean) objects[11])
                                    .build();
                        }

                        @Override
                        public List transformList(List list) {
                            Map<Long, QuestionDto> result = new TreeMap<>(Comparator.reverseOrder());//Comparator.naturalOrder()
                            for (Object obj : list) {
                                QuestionDto questionDto = (QuestionDto) obj;
                                if (result.containsKey(questionDto.getId()))
                                    result.get(questionDto.getId()).getTags().addAll(questionDto.getTags());
                                else result.put(questionDto.getId(), questionDto);
                            }
                            return new ArrayList<>(result.values());
                        }
                    })
                    .getResultList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return questionDto;
    }
}