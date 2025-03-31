# 전체적인 컴포넌트 분리

- Profile Photo
- User Details
  - 입력창 5개 (전체적으로 세로 정렬, 맨 위 2개만 가로 정렬)
  - 버튼 2개

## profile-photo-container

- display: flex -> 프로필 사진과 버튼 2개를 가로 정렬

## upload-remove-buttons

- flex-direction: column -> 버튼 2개를 세로 정렬

## input-section

- flex-direction: column -> 입력 필드들을 세로 정렬

## input-row

- flex-direction: row -> 맨 위 입력 필드 2개를 가로로 정렬

## button-section

- flex-direction: row -> 하단 버튼 2개를 가로 정렬
- justify-content: space-between -> 왼쪽/오른쪽 양끝 정렬
