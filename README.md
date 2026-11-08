# Web Archive

> 도서, 강의, 교육과정을 통해 학습한 웹 개발 프로젝트를 정리한 저장소입니다.

## Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=flat-square&logo=spring-security&logoColor=white)
![Ktor](https://img.shields.io/badge/Ktor-087CFA?style=flat-square&logo=ktor&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white)
![Elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=flat-square&logo=elasticsearch&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

## Repository Structure

### Frontend

| 프로젝트 | 유형 | 출처 | 내용 |
| --- | --- | --- | --- |
| [ecomm-ui](frontend/books/modern-api-dev-with-spring/ecomm-ui) | 도서 | Modern API Development with Spring | React 기반 이커머스 UI (인증, 장바구니, 상품/주문 조회) |

### Backend

| 프로젝트 | 유형 | 출처 | 내용 |
| --- | --- | --- | --- |
| [ecomm](backend/books/modern-api-dev-with-spring/ecomm) | 도서 | Modern API Development with Spring | Spring Boot 이커머스 REST API (JWT 인증, HATEOAS, Prometheus/Grafana, Zipkin, ELK) |
| [aop](backend/books/modern-api-dev-with-spring/aop) | 도서 | Modern API Development with Spring | 커스텀 어노테이션과 Aspect를 활용한 실행 시간 측정 AOP 예제 |
| [aircraft-positions](backend/books/spring-boot-up-and-running/aircraft-positions) | 도서 | Spring Boot: Up and Running | Spring Cloud Stream으로 항공기 위치 메시지를 수신하여 WebSocket으로 전달 |
| [plane-finder](backend/books/spring-boot-up-and-running/plane-finder) | 도서 | Spring Boot: Up and Running | RSocket/REST 서비스에서 생성한 항공기 위치를 RabbitMQ/Kafka로 발행 |
| [kotlin-spring-api-practice](backend/courses/inflearn/kotlin-spring-api-practice) | 강의 | 인프런 - [초급] 맛보자! 코틀린과 스프링으로 API 호출하기 | Kotlin/Spring Boot 기반 카카오 블로그 검색 API 연동 |
| [kotlin-spring-security-practice](backend/courses/inflearn/kotlin-spring-security-practice) | 강의 | 인프런 - [초급] 찍어먹자! 코틀린과 Spring Security + JWT로 회원가입 만들기 | Kotlin/Spring Security 기반 JWT 인증 및 인가 |
| [ktor](backend/personal/ktor) | 개인 | - | 인메모리 저장소와 OpenAPI/Swagger 문서를 갖춘 Ktor Todo CRUD API |
| [thymeleaf](backend/personal/thymeleaf) | 개인 | - | Kotlin/Spring Boot 기반 Thymeleaf 템플릿 및 프래그먼트 기본 예제 |

### Integrated

| 프로젝트 | 유형 | 출처 | 내용 |
| --- | --- | --- | --- |
| [full-stack-react-spring-boot](integrated/courses/udemy/full-stack-react-spring-boot) | 강의 | Udemy - Become a Java Full Stack Developer with React & Spring Boot | 21개 섹션에 걸쳐 구현한 React와 Spring Boot 기반 이커머스 애플리케이션 |
| [solebid](integrated/training/sesac/solebid) | 교육 | 청년취업사관학교 새싹(SeSAC) | React/TypeScript와 Spring Boot 기반 스니커즈 경매 마켓플레이스 (SSE 실시간 입찰, Redis 알림, PortOne 포인트 결제) |
