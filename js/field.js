field = {
    "1":["academic researcher","assistant researcher","biomedical engineering","educator / instructor","freelance","research assistant"],
    "2":["business database & analyst","cloud engineer","data engineer","data or business database & analyst","data scientist or machine learning specialist","database & database & analyst administrator","economist","freelance","fx dealer","logistics","scientist","system database & analyst"],
    "3":["ceo","company owner && founder","consultant","cto","director","engineering manager","freelance","general manager","hr & hris technology specialist","it manager","it specialist","it specialists/ product engineer","manager","manager support","officer","operation manager (part-time)","product manager","product owner","production control","production manager","production planner","project manager","senior executive/vp","senior technical consultant","solutions consultant","state enterprise","supplychain","team lead","tech specialist","technical consultant","technical solution architect","technician process computer"],
    "4":["admin support","application support","computer architect","core network engineer","electrical engineer","engineer","engineer / planner","engineer support","engineering supervisor","engineering system","freelance","internal audit","it security","it support","mechanical engineer","network automation","network engineer","network transport engineer","robotics software engineer","security engineer","security implementation engineer","security specialist","service","statistic & admin(it support)","support engineer","system administrator","tech support & professional service lead","technical support engineer"],
    "5":[".net programmer","android developer","application development teamlead","application operation","application specialist","back-end developer","desktop or enterprise applications developer","devops specialist","embedded applications or devices developer","freelance","front-end developer","full-stack developer","game or graphics developer","immersive application developer","mobile developer","programmer","qa or test developer","research & development","rpa developer","senior developer","senior programmer","software developer","software engineer","software implementer","specialist developer"],
    "6":["client-facing engineer","creative","customer service","designer","freelance","online marketing","sale/marketing manager","sap abaper","sap consultant","service engineer","service iot engineer","side engineer","ui designer","ux/ui developer","web developer"]
}


job_f = ["","Academic researcher","Database & Analyst","IT Management","IT Support","Programmer","Website"]

check_field = function(position){
    for(var key in field){
        if($.inArray(position.toLowerCase(),field[key])!=-1){
            return [key,job_f[key],position]
        }
    }
}