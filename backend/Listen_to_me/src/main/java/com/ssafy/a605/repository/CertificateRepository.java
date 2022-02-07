package com.ssafy.a605.repository;

import com.ssafy.a605.model.entity.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificateRepository extends JpaRepository<Certificate,Long> {
}
