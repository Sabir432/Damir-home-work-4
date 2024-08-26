let hour = +prompt('Введите час')

switch (hour) {
  case 22:
  case 23:
  case 0:
    alert(`${hour} часов ночи`)
    break;
    case 1:
    alert(`${hour} час ночи`)
    break;
    case 2:
    case 3:
    alert(`${hour} часа ночи`)
    break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    alert(`${hour} часов утра`)
    break;
    case 12:
    case 13:
    case 14:
    case 15:
      alert(`${hour} часов дня`)
      break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
      alert(`${hour} часов вечера`)
      break;
     

  default:
    break;
}

    if(hour >= 25){
    alert(`Вы серьёзно... или вы из другой вселленой где время по другому?`)
}