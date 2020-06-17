package com.javamentor.qa.platform.service.abstracts.model;

import com.javamentor.qa.platform.models.entity.user.Reputation;
import com.javamentor.qa.platform.models.entity.user.UserBadges;

public interface UserBadgesService extends ReadWriteService<UserBadges, Long> {

    void checkAndUpdateUserBadges(Reputation reputationDto);
}
