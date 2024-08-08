import numpy as np
import math as mt

#Main function
def SS_Cost_Estimator(HV_voltage, LV_voltage, G_PR, pf_r, V_reg, Xf_num, Xf_size, LV_Num_Line_Bay_WO_CB, LV_Num_Line_Bay, LV_Num_Bus_Tie_Bay, 
                               LV_Num_Line_Bay_AND_Bus_Tie_Bay, HV_Num_Line_Bay_WO_CB, HV_Num_Line_Bay, HV_Num_Bus_Tie_Bay, HV_Num_Line_Bay_AND_Bus_Tie_Bay,Capacitor,Area,Land_cost_pu):

    if LV_voltage<=14.4:
        Bay_cost = LV_Num_Line_Bay_WO_CB*(162-(.25*185)) + LV_Num_Line_Bay*162 + LV_Num_Bus_Tie_Bay*142 + LV_Num_Line_Bay_AND_Bus_Tie_Bay*(162+198)
    elif LV_voltage>14.4 and LV_voltage<=34.5:
        Bay_cost = LV_Num_Line_Bay_WO_CB*(198-(.25*210)) + LV_Num_Line_Bay*198 + LV_Num_Bus_Tie_Bay*171 + LV_Num_Line_Bay_AND_Bus_Tie_Bay*(171+198)
    elif LV_voltage>34.5 and LV_voltage<=69:
        Bay_cost = LV_Num_Line_Bay_WO_CB*(260-(.25*300)) + LV_Num_Line_Bay*260 + LV_Num_Bus_Tie_Bay*223 + LV_Num_Line_Bay_AND_Bus_Tie_Bay*(223+260)
    elif LV_voltage>69 and LV_voltage<=115:
        Bay_cost = LV_Num_Line_Bay_WO_CB*(367-(.25*367)) + LV_Num_Line_Bay*367 + LV_Num_Bus_Tie_Bay*319 + LV_Num_Line_Bay_AND_Bus_Tie_Bay*(367+319)
    elif LV_voltage>115 and LV_voltage<=138:
        Bay_cost = LV_Num_Line_Bay_WO_CB*(404-(.25*404)) + LV_Num_Line_Bay*404 + LV_Num_Bus_Tie_Bay*349 + LV_Num_Line_Bay_AND_Bus_Tie_Bay*(349+404)
    elif LV_voltage>138 and LV_voltage<=161:
        Bay_cost = LV_Num_Line_Bay_WO_CB*(468-(.25*468)) + LV_Num_Line_Bay*468 + LV_Num_Bus_Tie_Bay*406 + LV_Num_Line_Bay_AND_Bus_Tie_Bay*(406+468)
    elif LV_voltage>161 and LV_voltage<=230:
        Bay_cost = LV_Num_Line_Bay_WO_CB*(593-(.25*593)) + LV_Num_Line_Bay*593 + LV_Num_Bus_Tie_Bay*512 + LV_Num_Line_Bay_AND_Bus_Tie_Bay*(512+593)

    #Estimate cost - Modify for different output bay 
    if HV_voltage<=14.4:
        Bay_cost =  Bay_cost + HV_Num_Line_Bay_WO_CB*(162-(.25*185)) + HV_Num_Line_Bay*162 + HV_Num_Bus_Tie_Bay*142 + HV_Num_Line_Bay_AND_Bus_Tie_Bay*(162+198)
    elif HV_voltage>14.4 and HV_voltage<=34.5:
        Bay_cost =  Bay_cost + HV_Num_Line_Bay_WO_CB*(198-(.25*210)) + HV_Num_Line_Bay*198 + HV_Num_Bus_Tie_Bay*171 + HV_Num_Line_Bay_AND_Bus_Tie_Bay*(171+198)
    elif HV_voltage>34.5 and HV_voltage<=69:
        Bay_cost =  Bay_cost + HV_Num_Line_Bay_WO_CB*(260-(.25*300)) + HV_Num_Line_Bay*260 + HV_Num_Bus_Tie_Bay*223 + HV_Num_Line_Bay_AND_Bus_Tie_Bay*(223+260)
    elif HV_voltage>69 and HV_voltage<=115:
        Bay_cost =  Bay_cost +HV_Num_Line_Bay_WO_CB*(367-(.25*367)) + HV_Num_Line_Bay*367 + HV_Num_Bus_Tie_Bay*319 + HV_Num_Line_Bay_AND_Bus_Tie_Bay*(367+319)   
    elif HV_voltage>115 and HV_voltage<=138:
        Bay_cost = Bay_cost + HV_Num_Line_Bay_WO_CB*(404-(.25*404)) + HV_Num_Line_Bay*404 + HV_Num_Bus_Tie_Bay*349 + HV_Num_Line_Bay_AND_Bus_Tie_Bay*(349+404)
    elif HV_voltage>138 and HV_voltage<=161:
        Bay_cost = Bay_cost + HV_Num_Line_Bay_WO_CB*(468-(.25*468)) + HV_Num_Line_Bay*468 + HV_Num_Bus_Tie_Bay*406 + HV_Num_Line_Bay_AND_Bus_Tie_Bay*(406+468)
    elif HV_voltage>161 and HV_voltage<=230:
        Bay_cost = Bay_cost + HV_Num_Line_Bay_WO_CB*(593-(.25*593)) + HV_Num_Line_Bay*593 + HV_Num_Bus_Tie_Bay*512 + HV_Num_Line_Bay_AND_Bus_Tie_Bay*(512+593)

    #transformer size in MVA
    if Xf_size == None:
        Xf_size = np.sqrt(G_PR**2+(G_PR*mt.tan(mt.acos(pf_r)))**2)

    #transformer cost
    if Xf_size<150:
        Xf_cost = Xf_num*(-.004*Xf_size**3+.0883*Xf_size**2+1.304*Xf_size+425)#366.67
    else:
        print ('Transformer size is out of bounds')

    if V_reg != 'true':
        Xf_cost = Xf_cost + Xf_num*(203)

    Aux_cap = .3*Xf_size*Xf_num
    if Capacitor=='true': #kV
            Aux_cost = Aux_cap*4325/1000

    Land_cost = Land_cost_pu*Area

    #Total Cost of SS
    Esc_fac = 2.08
    Total_SS_Cost = Esc_fac*((Bay_cost+Xf_cost+Aux_cost)*1.1 + Land_cost) #Multiplacation factor can vary between .8 and 1.5

    print('The total cost of the bays: (k$)', Bay_cost)
    print('The size of the Transformer: ', Xf_size)
    print('The total cost of the Transformer: (k$)', Xf_cost)
    print('The total cost of the substation is: (k$)', Total_SS_Cost)
    
    return Total_SS_Cost

#Main inputs
HV_voltage = 115 #High voltage side voltage
LV_voltage = 12.5 #Low voltage side voltage
G_PR = 12.5 #Power rating of the generator
pf_r = .95 #Power factor rating of the generator
V_reg = 'true' #Are voltage regulators being used?
Capacitor = 'true' #Are capacitors being used?
Xf_num = 1 
Xf_size = 12.5 #MVA

#Number of line bays in the LV side
LV_Num_Line_Bay_WO_CB  = 1 #Bay without circuit breaker
LV_Num_Line_Bay = 2 #Bay with circuit breaker
LV_Num_Bus_Tie_Bay  = 0 
LV_Num_Line_Bay_AND_Bus_Tie_Bay = 0

#Number of line bays in the LV side
HV_Num_Line_Bay_WO_CB  = 1
HV_Num_Line_Bay = 1
HV_Num_Bus_Tie_Bay  = 0
HV_Num_Line_Bay_AND_Bus_Tie_Bay = 0

#Building calculation
Land_cost_pu = .1 #$/sqft
Area = 22*16 #sqft

#Using the function - SS is the Total substation cost in (k$)
SS = SS_Cost_Estimator(HV_voltage, LV_voltage, G_PR, pf_r, V_reg, Xf_num, Xf_size, LV_Num_Line_Bay_WO_CB, LV_Num_Line_Bay, LV_Num_Bus_Tie_Bay, 
                       LV_Num_Line_Bay_AND_Bus_Tie_Bay, HV_Num_Line_Bay_WO_CB, HV_Num_Line_Bay, HV_Num_Bus_Tie_Bay, HV_Num_Line_Bay_AND_Bus_Tie_Bay,Capacitor,Area,Land_cost_pu)


print(SS)