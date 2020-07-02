// get condition to use regression model
function pred_condition(field,role){    
    let cond = null
    if(field=="Programmer"){
        var cond_num = 4;
        position = role.toLowerCase()
        for(var i =0 ; i<condition_coef_regression[field]['condition'].length; ++i){
            if(condition_coef_regression[field]['condition'][i].indexOf(position) > -1){
                cond_num = i;
            }
        }
        cond = condition_coef_regression[field][cond_num];
    }
    else{
        cond = condition_coef_regression[field];
    }
    return cond;
}

// Calculate salary
function pred_salary(field_a , education=6, age=23, yft=0, lp=0, code_level){
    let [field_num , field , role] = field_a
    cond = pred_condition(field,role)
    const confinv_tSnC = cond['confident interval']
    let x_matrix = []

    
    let y_pred = 0
    for (const [key, value] of Object.entries(cond)) {
        if(key == 'salary'){
            y_pred += value //intercept
        }
        else if(key == 'education level'){
            y_pred += (value*education)
            x_matrix.push(education)
        }
        else if(key == 'age'){
            y_pred += (value*lp)
            x_matrix.push(lp)
        }
        else if(key == 'years of full time job'){
            y_pred += (value*yft)
            x_matrix.push(yft)
        }
        else if(key == 'years of learn programe'){
            y_pred += (value*lp)
            x_matrix.push(lp)
        }
        else if(key == 'confident interval'){
            continue
        }
        else{
            if(code_level[key]){
                y_pred += (value*code_level[key])
                x_matrix.push(code_level[key])
            }
            else{
                x_matrix.push(0)
            }
        }
    }
    
    var y_interval = confidence_interval(y_pred,[x_matrix],confinv_tSnC)
    y_interval.sort()
    return y_interval
}
