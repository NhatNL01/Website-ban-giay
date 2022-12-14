package com.hit.product.adapter.web.v1.controllers;

import com.hit.product.adapter.web.base.RestApiV1;
import com.hit.product.adapter.web.base.VsResponseUtil;
import com.hit.product.applications.constants.UrlConstant;
import com.hit.product.applications.services.EventService;
import com.hit.product.domains.dtos.EventDto;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestApiV1
public class EventController {

    @Autowired
    EventService eventService;

    @GetMapping(UrlConstant.Event.DATA_EVENT)
    @ApiOperation(value = "Get All Event In Database")
    public ResponseEntity<?> getEvents() {
        return VsResponseUtil.ok(eventService.getEvents());
    }

    @GetMapping(UrlConstant.Event.DATA_EVENT_ID)
    @ApiOperation(value = "Get Event By Id Event")
    public ResponseEntity<?> getEventById(@PathVariable("id") Long id) {
        return VsResponseUtil.ok(eventService.getEventById(id));
    }

    @PostMapping(UrlConstant.Event.DATA_EVENT_CREATE)
    @ApiOperation(value = "Create Event")
    public ResponseEntity<?> createEvent(@RequestBody EventDto eventDto) {
        return VsResponseUtil.ok(eventService.createEvent(eventDto));
    }

    @PatchMapping(UrlConstant.Event.DATA_EVENT_ID)
    @ApiOperation(value = "Update Event")
    public ResponseEntity<?> updateEvent(@PathVariable("id") Long id, @RequestBody EventDto eventDto) {
        return VsResponseUtil.ok(eventService.updateEvent(id, eventDto));
    }

    @DeleteMapping(UrlConstant.Event.DATA_EVENT_ID)
    @ApiOperation(value = "Delete Event By Id")
    public ResponseEntity<?> deleteEvent(@PathVariable("id") Long id) {
        return VsResponseUtil.ok(eventService.deleteEvent(id));
    }

}
