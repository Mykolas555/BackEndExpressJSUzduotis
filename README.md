# Expences API

Expences

## Base URL

`https://api/v1/expences`

## Endpoints

### 1. Get Expences

- **Endpoint:** `/api/v1/expences`
- **Method:** `GET`
- **Description:** List of all expences.

### 2. Get Expence

- **Endpoint:** `/api/v1/expences/:id`
- **Method:** `GET`
- **Description:** Get expence by id.

### 3. Create Expence

- **Endpoint:** `/api/v1/expences`
- **Method:** `PUT`
- **Description:** Create new expence.

### 4. Update Expence

- **Endpoint:** `/api/v1/expences/:id`
- **Method:** `PATCH`
- **Description:** Update existing expence.

### 5. Delete Expences

- **Endpoint:** `/api/v1/expences/:id`
- **Method:** `DELETE`
- **Description:** Delete existing expence.

### 6. Expences by date

- **Endpoint:** `/api/v1/expences/date-range/:startDate/:endDate`
- **Method:** `GET`
- **Description:** Gets expences by selected date period and sum expences.
