package com.javamentor.qa.platform.models.entity;

import com.javamentor.qa.platform.models.entity.user.User;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "reputation")
public class Reputation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    @Column(name = "persist_date", updatable = false)
    @Type(type = "org.hibernate.type.LocalDateTimeType")
    private LocalDateTime persistDateTime;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "reputation_count")
    private Integer reputationCount;

    @Column(name = "voice_count")
    private Integer voiceCount;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reputation reputation = (Reputation) o;
        return Objects.equals(id, reputation.id) &&
                Objects.equals(persistDateTime, reputation.persistDateTime)&&
                Objects.equals(reputationCount, reputation.reputationCount)&&
                Objects.equals(voiceCount, reputation.voiceCount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, persistDateTime, reputationCount, voiceCount);
    }
}
