package com.kauffman.management.modules.credentials.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CredentialsSearchPayload {
    private String search;
}
