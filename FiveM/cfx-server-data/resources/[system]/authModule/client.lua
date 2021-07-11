local uiEnabled = false

function showUI(bool)
    SetNuiFocus(bool, bool)
    if bool == true then -- statement is only true if control is pressed
        SendNUIMessage({showui = true}) -- send show ui = true to js
    else
        SendNUIMessage({showui = false})
    end
    return bool

end

function freezePerson(bool)
    DisableControlAction(0, 1, bool)
    DisableControlAction(0, 2, bool)
    DisableControlAction(0, 142, bool)
    DisableControlAction(0, 18, bool)
    DisableControlAction(0, 322, bool)
    DisableControlAction(0, 106, bool)
end

function chat(message, color)
    TriggerEvent("chat:addMessage",
                 {color = color, multiline = true, args = {message}})
end

RegisterNUICallback("get-data", function(data)
    local login = data.login
    local password = data.password

    uiEnabled = false

    showUI(uiEnabled)
    freezePerson(uiEnabled)
    chat(string.format("Login is: %s Password is: %s", login, password),
         {255, 255, 0})
end)

Citizen.CreateThread(function()
    while true do
        AddEventHandler('onClientGameTypeStart', function()
            uiEnabled = true
            showUI(uiEnabled)
            freezePerson(uiEnabled)
        end)

        Citizen.Wait(0)
    end
end)

